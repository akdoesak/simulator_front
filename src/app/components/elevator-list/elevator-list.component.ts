import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevatorService } from '../../services/elevator.service';
import { Elevator } from '../../models/elevator';


@Component({
  selector: 'app-elevator-list',
  templateUrl: './elevator-list.component.html',
  styleUrls: ['./elevator-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class ElevatorListComponent implements OnInit {
  elevators: Elevator[] = [];
  floors: number[] = [1, 2, 3, 4, 5];

  constructor(private elevatorService: ElevatorService) { }

  ngOnInit(): void {
    this.loadElevators();
    setInterval(() => this.loadElevators(), 1000);
  }

  loadElevators(): void {
    this.elevatorService.getElevators()
      .subscribe(elevators => this.elevators = elevators);
  }

  requestElevator(floor: number): void {
    this.elevatorService.requestElevator(floor)
      .subscribe(() => this.loadElevators());
  }

  selectFloor(elevatorId: number, floor: number): void {
    this.elevatorService.selectFloor(elevatorId, floor)
      .subscribe(() => this.loadElevators());
  }
}
