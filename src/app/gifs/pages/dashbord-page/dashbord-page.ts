import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeader } from '../../components/gifs-side-menu/side-menu-header/side-menu-header';
import { SideMenuOptions } from '../../components/gifs-side-menu/side-menu-options/side-menu-options';
import { GifsSideMenu } from '../../components/gifs-side-menu/gifs-side-menu';

@Component({
  selector: 'app-dashbord-page',
  imports: [RouterOutlet, GifsSideMenu],
  templateUrl: './dashbord-page.html',
})
export default class DashbordPage {}
