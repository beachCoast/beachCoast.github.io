import { Component, HostListener, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

// tslint:disable-next-line: ban-types
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Drive Begins';
  faTimes = faTimes;

  constructor(private titleService: Title, private metaTagService: Meta, private router: Router) {
    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: 'keywords', content: 'The Drive Begins, Car Blog, Dorset, Magnus Walker Book Review, Beaulieu Supercar show review' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Steve Heggie' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2020-04-23', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }
  // #2EB3CD text
  // #43f6ff text hover
  // #1B364A background
  // #1b364a91 background with transparency
  // #2eb3cdba blog hover transparent

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (document.documentElement.scrollWidth < 993) {

    } else if (document.documentElement.scrollWidth > 992 && document.documentElement.scrollTop > 200) {
      document.getElementById('mainNav').style.height = '9%';
    } else if (document.documentElement.scrollWidth > 992 && document.documentElement.scrollTop < 200) {
      document.getElementById('mainNav').style.height = 'auto';
    }

    const mybutton = document.getElementById('myBtn');
    if (document.documentElement.scrollTop > 20) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 993) {
      document.getElementById('mainNav').style.paddingBottom = '0px';
    } else if (event.target.innerWidth > 992 && document.documentElement.scrollTop > 200) {
      document.getElementById('mainNav').style.paddingBottom = '3px';
    } else if (event.target.innerWidth > 992 && document.documentElement.scrollTop < 200) {
      document.getElementById('mainNav').style.paddingBottom = '3px';
    }
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
