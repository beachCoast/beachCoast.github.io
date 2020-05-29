import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

// tslint:disable-next-line: ban-types
declare let ga: Function;

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})
export class BlogGridComponent implements OnInit {

  constructor(private metaTagService: Meta) {

  }

  ngOnInit(): void {
    this.metaTagService.updateTag(
      { name: 'description', content: 'Read magnus walker book review and the beaulieu supercar show review' }
    );

    this.metaTagService.updateTag(
      // tslint:disable-next-line: max-line-length
      { name: 'keywords', content: 'Porsches, Business, Entrepreneur, Magnus Walker, Book, Blog, Classic Cars, Beaulieu, Supercar show, walking review, Hampshire' },
    );
  }

  magnusBlogClick = () => {
    ga('send', 'event', {
      eventCategory: 'Blog',
      eventLabel: 'Magnus Walker',
      eventAction: 'Opened Blog'
    });
  }

  beaulieuBlogClick = () => {
    ga('send', 'event', {
      eventCategory: 'Blog',
      eventLabel: 'Beaulieu Review',
      eventAction: 'Opened Blog'
    });
  }

  mgmaestroBlogClick = () => {
    ga('send', 'event', {
      eventCategory: 'Blog',
      eventLabel: 'Mg Maestro Review',
      eventAction: 'Opened Blog'
    });
  }

  cafeBlogClick = () => {
    ga('send', 'event', {
      eventCategory: 'Blog',
      eventLabel: 'Cafe Review',
      eventAction: 'Opened Blog'
    });
  }

  driveBlogClick = () => {
    ga('send', 'event', {
      eventCategory: 'Blog',
      eventLabel: 'Local Drive Review',
      eventAction: 'Opened Blog'
    });
  }

  businessBlogClick = () => {
    ga('send', 'event', {
      eventCategory: 'Blog',
      eventLabel: 'Local Business Review',
      eventAction: 'Opened Blog'
    });
  }
}
