import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from 'src/app/models/model';
import { TagService } from 'src/app/Services/tag.service';

@Component({
  selector: 'app-addtagtoproduct',
  templateUrl: './addtagtoproduct.component.html',
  styleUrls: ['./addtagtoproduct.component.css']
})
export class AddtagtoproductComponent implements OnInit {
  progressBar  = false ;
  tags!: Tag[];
  filterTags!: Tag[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                  private tagService: TagService) { }

  ngOnInit(): void {
    this.tagService.findAllTags().subscribe(tags => {
      this.tags = tags;
      //console.log("tagsssssssss all",this.tags)
      this.tagService.findTagsForProduct(this.data.idProduct).subscribe(filterTags => {
        this.filterTags = filterTags;
        this.filterTags.forEach(t => {
          this.tags = this.tags.filter(item => item.id !== t.id);

        })
      })
    })
  }
  selectedValue(event: any) {
    const idTag = event.value;
    console.log("ddddddddddddddd",idTag)
    this.tagService.addTagToProduct(this.data.idProduct, idTag).subscribe(() => {
      window.location.reload();
    })
  }

}
