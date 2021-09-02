import { Injectable } from "@angular/core";

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: "",
    name: "Training",
    type: "saperator",
    icon: "av_timer",
  },
  {
    state: "apps",
    name: "Apps",
    type: "sub",
    icon: "apps",
    children: [
      { state: "courses", name: "Courses", type: "link" },
      { state: "contact", name: "Contact", type: "link" },
    ],
  },
];

@Injectable()
export class HorizontalMenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
