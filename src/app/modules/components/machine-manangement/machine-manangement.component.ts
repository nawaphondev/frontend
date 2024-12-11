import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-machine-management',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './machine-manangement.component.html',
  styleUrls: ['./machine-manangement.component.scss']
})
export class MachineManangementComponent {
  machines = [
    { id: 'M001', name: 'Machine A', status: 'Operational' },
    { id: 'M002', name: 'Machine B', status: 'Under Maintenance' },
    { id: 'M003', name: 'Machine C', status: 'Out of Service' },
  ];

  // เปิด Modal หรือแสดงฟังก์ชันอื่น
  openAddMachineModal() {
    console.log('Open Add Machine Modal'); // Replace with actual modal logic
  }
}
