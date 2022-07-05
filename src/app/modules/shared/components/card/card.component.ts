import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() imageUrl!: string;
  @Input() isLike!: boolean;

  @Output() sendToggleLike = new EventEmitter();
  @Output() sendEditUser = new EventEmitter();
  @Output() sendExportUser = new EventEmitter();
  @Output() sendSaveUser = new EventEmitter();
  @Output() sendOnlyFirst = new EventEmitter();
  @Output() sendPreview = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleLike() {
    this.isLike = !this.isLike;
    this.sendToggleLike.emit();
  }

  editUser() {
    this.sendEditUser.emit();
  }

  exportUser() {
    this.sendExportUser.emit();
  }

  saveUser() {
    this.sendSaveUser.emit();
  }

  sendOnlyFirstRequest() {
    this.sendOnlyFirst.emit();
  }

  previewUser() {
    this.sendPreview.emit();
  }
}