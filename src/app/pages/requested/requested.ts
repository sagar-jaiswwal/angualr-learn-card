import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-requested',
  standalone: true,
  imports: [],
  templateUrl: './requested.html',
  styleUrls: ['./requested.scss'],
})
export class Requested {
  uploadedFileName: string | null = null;
  excelData: any[] = [];

  // 1) Download Sample File
  downloadExcel1() {
    const sampleData = [
      {
        'Sr No': 1,
        Name: 'John Doe',
        ID: 101,
        City: 'Mumbai',
        State: 'Maharashtra',
      },
      {
        'Sr No': 2,
        Name: 'Jane Smith',
        ID: 102,
        City: 'Delhi',
        State: 'Delhi',
      },
      {
        'Sr No': 3,
        Name: 'Mark Lee',
        ID: 103,
        City: 'Pune',
        State: 'Maharashtra',
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(sampleData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'sample.xlsx');
  }

  downloadExcel() {
    const fileUrl = 'assets/files/Uploaded_Files.xlsx';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Uploaded_Files.xlsx'; // Suggested file name
    link.target = '_blank'; // Open after download if browser allows
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // 2) File Select
  onFileSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      this.readExcel(file);
    }
  }

  // 3) Drag Over
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  // 4) File Drop
  onFileDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      this.readExcel(file);
    }
  }

  // 5) Read Excel
  private readExcel(file: File) {
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      alert('Only Excel files are allowed');
      return;
    }

    this.uploadedFileName = file.name;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      this.excelData = XLSX.utils.sheet_to_json(sheet);
    };
    reader.readAsArrayBuffer(file);
  }

  // 6) Remove Uploaded File
  removeUploadedFile() {
    this.uploadedFileName = null;
    this.excelData = [];
  }
}
