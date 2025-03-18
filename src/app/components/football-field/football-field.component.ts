import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IPlayer } from '@shared/interfaces';
import { IFieldPosition } from '@shared/interfaces/field-position.interface';

@Component({
  selector: 'app-football-field',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './football-field.component.html',
  styleUrl: './football-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FootballFieldComponent {
  // Игроки
  public players: IPlayer[] = [
    { id: 1, number: 1, firstName: 'Александр', lastName: 'Павлов', photoUrl: 'https://picsum.photos/id/237/100' },
    { id: 2, number: 2, firstName: 'Петр', lastName: 'Петров', photoUrl: 'https://picsum.photos/id/244/100' },
    { id: 3, number: 3, firstName: 'Алексей', lastName: 'Сидоров', photoUrl: 'https://picsum.photos/id/234/100' },
    { id: 4, number: 4, firstName: 'Иван', lastName: 'Иванов', photoUrl: 'https://picsum.photos/id/229/100' },
    { id: 5, number: 5, firstName: 'Петр', lastName: 'Обезьянин', photoUrl: 'https://picsum.photos/id/236/100' },
    { id: 6, number: 6, firstName: 'Алексей', lastName: 'Толстой', photoUrl: 'https://picsum.photos/id/238/100' },
    { id: 7, number: 7, firstName: 'Кирилл', lastName: 'Иванов', photoUrl: 'https://picsum.photos/id/217/100' },
    { id: 8, number: 8, firstName: 'Петр', lastName: 'Петров', photoUrl: 'https://picsum.photos/id/228/100' },
    { id: 9, number: 9, firstName: 'Рулон', lastName: 'Обоев', photoUrl: 'https://picsum.photos/id/214/100' },
    { id: 10, number: 10, firstName: 'Петр', lastName: 'Афанасьев', photoUrl: 'https://picsum.photos/id/225/100' },
    { id: 11, number: 11, firstName: 'Саддам', lastName: 'Хусейн', photoUrl: 'https://picsum.photos/id/208/100' },
  ];

  // Позиции
  public fieldPositions: IFieldPosition[] = [
    // Вратарь
    { id: 'pos-0', x: 50, y: 12, players: [] },
    // Защитники
    { id: 'pos-1', x: 20, y: 22, players: [] },
    { id: 'pos-2', x: 40, y: 22, players: [] },
    { id: 'pos-3', x: 60, y: 22, players: [] },
    { id: 'pos-4', x: 80, y: 22, players: [] },
    // Полузащитники
    { id: 'pos-5', x: 20, y: 32, players: [] },
    { id: 'pos-6', x: 40, y: 32, players: [] },
    { id: 'pos-7', x: 60, y: 32, players: [] },
    { id: 'pos-8', x: 80, y: 32, players: [] },
    // Нападающие
    { id: 'pos-9', x: 40, y: 42, players: [] },
    { id: 'pos-10', x: 60, y: 42, players: [] },

    // Вратарь
    { id: 'enemy-pos-0', x: 50, y: 88, players: [] },
    // Защитники
    { id: 'enemy-pos-1', x: 20, y: 78, players: [] },
    { id: 'enemy-pos-2', x: 40, y: 78, players: [] },
    { id: 'enemy-pos-3', x: 60, y: 78, players: [] },
    { id: 'enemy-pos-4', x: 80, y: 78, players: [] },
    // Полузащитники
    { id: 'enemy-pos-5', x: 20, y: 68, players: [] },
    { id: 'enemy-pos-6', x: 40, y: 68, players: [] },
    { id: 'enemy-pos-7', x: 60, y: 68, players: [] },
    { id: 'enemy-pos-8', x: 80, y: 68, players: [] },
    // Нападающие
    { id: 'enemy-pos-9', x: 40, y: 58, players: [] }, 
    { id: 'enemy-pos-10', x: 60, y: 58, players: [] },
  ];

  public connectedDropLists: string[] = ['players-list'];

  constructor() {
    this.fieldPositions.forEach(position => {
      this.connectedDropLists.push(position.id);
    });
  }

  public drop(event: CdkDragDrop<IPlayer[]>) {
    console.log(event.container);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.data.length === 0 || event.container.id === 'players-list') {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }
  }
}