import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ResuestService } from '../../core/services/resuest-service'

@Component({
  selector: 'app-create-issue-model',
  standalone: false,
  templateUrl: './create-issue-model.html',
  styleUrl: './create-issue-model.scss'
})


export class CreateIssueModel implements OnInit {
  data!: any;
  name!: any

  datars: any = ["s", "ee", "ews", 'q']
  @Output() onClose = new EventEmitter();
  @Output() onSubmit = new EventEmitter<any>();
  modalRef!: BsModalRef;
  isDraggingOver = false;
  issue = {
    type: '',
    title: '',
    description: '',
    priority: 'medium',
    department: 'development',
    attachments: [] as File[]
  };
  constructor(public bsModalRef: BsModalRef, private requestService: ResuestService) { }
  ngOnInit(): void {
    console.log("hiii", this.data)
  }



  close() {
    console.log("close")
    this.bsModalRef.hide();

  }


  submitIssue() {
    console.log(this.issue, "from issue")
    if (this.isFormValid()) {
      const newRequest = {
        type: this.issue.type,
        title: this.issue.type,
        description: this.issue.description,
        assignTo: this.issue.department,
        assignBy: "currentUser",
        priority: this.issue.priority,
        attachment: this.issue.attachments,
      }
      this.requestService.createRequest(newRequest).subscribe((data: any) => {
        console.log(data)
        this.bsModalRef.hide();
      })
    }
  }

  isFormValid(): boolean {
    return !!this.issue.type && !!this.issue.title && !!this.issue.description;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingOver = true;
  }

  onDragLeave() {
    this.isDraggingOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingOver = false;

    if (event.dataTransfer?.files) {
      this.handleFiles(event.dataTransfer.files);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(input.files);
    }
  }

  handleFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (this.validateFile(file)) {
        this.issue.attachments.push(file);
      }
    }
  }

  validateFile(file: File): boolean {
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      alert(`File type not supported: ${file.name}`);
      return false;
    }

    if (file.size > maxSize) {
      alert(`File too large (max 5MB): ${file.name}`);
      return false;
    }

    return true;
  }

  removeAttachment(index: number) {
    this.issue.attachments.splice(index, 1);
  }

  getFileIcon(type: string): string {
    if (type.startsWith('image/')) return 'image';
    if (type === 'application/pdf') return 'pdf';
    if (type.includes('word')) return 'doc';
    return 'default';
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }
}