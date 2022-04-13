import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticlesServiceService } from 'src/app/services/articles-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  articleList: Article[] | undefined;

  constructor(private articleService: ArticlesServiceService) { 
  }

  ngOnInit(): void {
    this.articleService.getJsonArticles().subscribe( (response: Article[]) => {
      this.articleList = response;      
    });
  }

}
