import type { Link } from "../../models/link.svelte";

export interface TaskBar {
  links_list: Array<Link>,
  inner_width: string,
  time: Date
}
