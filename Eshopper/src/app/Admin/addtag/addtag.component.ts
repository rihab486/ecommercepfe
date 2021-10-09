import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/model';
import { TagService } from 'src/app/Services/tag.service';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-addtag',
  templateUrl: './addtag.component.html',
  styleUrls: ['./addtag.component.css']
})
export class AddtagComponent implements OnInit {
  progressBar = false;
  tag: Tag = {} as Tag;
  idTag: any;
  myForm !: FormGroup;
  constructor(private tagService: TagService,private fb:FormBuilder) { }


  ngOnInit(): void {
    if (this.idTag != null) {
      this.tagService.findTagById(this.idTag).subscribe(tag => {
        this.tag = tag;
      })
    }
      
    let formcontrols = {
      name: new FormControl('',[
        Validators.required
      ])
    }
    this.myForm=this.fb.group(formcontrols);
  }

  get u(){
    return this.myForm.get('name');}
  addTag() {
    this.progressBar=true
    if (this.idTag != null) {
      this.tagService.editTag(this.tag, this.idTag).subscribe(tag => {
        this.tag = tag;
        window.location.reload();
      })
    } else {
      this.tagService.addTag(this.tag).subscribe(tag => {
        this.tag = tag;
        window.location.reload();
      })
    }
  }

}
