import type { Link } from "../../models/link.svelte";

export interface TaskBarState {
  links_list: Array<Link>,
  inner_width: string,
  time: Date
}
