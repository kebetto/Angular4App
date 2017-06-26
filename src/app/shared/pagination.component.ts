import { 
	Component,
	Input, 
	Output, 
	EventEmitter }   from '@angular/core';
import { OnChanges } from '@angular/core';

import { UsersService }  from '../shared/users.service';

@Component({
	selector: 'pagination',
    template: `
    <nav>
        <ul class="pagination">
            <li [class.disabled]="currentPage == 1">
                <a (click)="previous()" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li [class.active]="currentPage == page" *ngFor="let page of pages" (click)="changePage(page)">
                <a>{{ page }}</a>
            </li>
            <li [class.disabled]="currentPage == pages.length">
                <a (click)="next()" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>  
`,
styles:['a{cursor:pointer}']
})
export class PaginationComponent implements OnChanges {
    @Input() items : any;
	@Input('page-size') pageSize = 10;
	@Output('page-changed') pageChanged = new EventEmitter();
	pages: any[];
	currentPage : number; 

    constructor(private _userService : UsersService){
    }

	ngOnChanges(){
        this.currentPage = 1;
		if (this.items) 
            var pagesCount = this.items.length / this.pageSize; 
		this.pages = [];
		for (var i = 1; i <= pagesCount; i++)
			this.pages.push(i);
	}

	changePage(page : number){
		this.currentPage = page; 
		this.pageChanged.emit(page);
	}

	previous(){
		if (this.currentPage == 1)
			return;

		this.currentPage--;
		this.pageChanged.emit(this.currentPage);
	}

	next(){
		if (this.currentPage == this.pages.length)
			return; 
		
		this.currentPage++;
		this.pageChanged.emit(this.currentPage);
	}

    private loadPosts(filter? : any){
		this._userService.getPosts(filter)
			.subscribe(
          posts => {
              //console.log(this.posts);
              this.items = posts;
            //   this.pagedPosts = _.take(this.posts, this.pageSize);
          }
        )       
    }
}