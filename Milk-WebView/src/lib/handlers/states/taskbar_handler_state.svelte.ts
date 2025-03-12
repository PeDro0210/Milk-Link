import type { Link } from "../../models/link.svelte";

export interface TaskBar {
  links_list: Array<Link>,
  innerWidth: string,
  time: Date
}
