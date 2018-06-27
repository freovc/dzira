import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private activetedRouter: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    // .currentUrlTree.root.children.primary.segments
  }

  routeOf(paths: string[]) {
    let result = false;
    for (let path of paths) {
      if (!!~window.location.href.indexOf(path)) {
        result = true;
        break;
      }
    }
    return result;
  }
}
