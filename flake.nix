{

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    naersk.url = "github:nix-community/naersk";

  };
  outputs =
    {
      self,
      nixpkgs,
      naersk,
    }:
    let
      supportedSystems = [
        "x86_64-linux"
        "aarch64-darwin"
      ];
      forAllSystems = nixpkgs.lib.genAttrs supportedSystems;
    in
    {
      packages = forAllSystems (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          naerskLib = pkgs.callPackage naersk { };

          base_lib = with pkgs; [
            dbus
          ];

          std_bin = with pkgs; [
            cmake
            clang
            pkg-config
            cargo
            rustc
            rust-analyzer
            clippy
            rustfmt
            taplo-lsp # lsp for cargo.toml

            svelte-language-server
            nodejs
            typescript-language-server

          ];
        in
        {

          # setup for rust backend
          default = naerskLib.buildPackage {

            src = ./milk-backend/.;

            buildInputs = base_lib;
            nativeBuildInputs = std_bin;

            LD_LIBRARY_PATH = base_lib;

            LIBCLANG_PATH = "${pkgs.llvmPackages_15.libclang.lib}/lib";
          };

        }
      );
    };
}
