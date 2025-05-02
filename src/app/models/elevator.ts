export interface Elevator {
  id: number;
  currentFloor: number;
  status: string;
  targetFloor?: number;
}
