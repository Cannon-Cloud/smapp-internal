import { Injectable } from "@angular/core";

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface SubChildren {
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  child?: SubChildren[];
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
    badge: [{ type: "warning", value: "new" }],
    children: [
      { state: "courses", name: "Courses", type: "link" },
      { state: "categories", name: "Categories", type: "link" },
      { state: "chargebee", name: "Plans Created", type: "link" },
      { state: "cbcustomer", name: "Customer Created", type: "link" },
      { state: "cbsubscription", name: "Subscription Created", type: "link" },
    ],
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
