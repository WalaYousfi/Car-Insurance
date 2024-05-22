import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  
})
export class ShellComponent {  
  isHandset$: Observable<boolean> = this.BreakpointObserver.observe([
    Breakpoints.Handset,
  ]).pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(private BreakpointObserver: BreakpointObserver) {}

}
