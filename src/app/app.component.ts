import {Component, OnInit} from '@angular/core';

const RANGE = 10;

const generateRandom = (min, max) => Math.floor((Math.random() * (max - min)) + min);
const getMin = (multiplier) => multiplier * RANGE + (multiplier === 0 ? 1 : 0);
const getMax = (multiplier) => multiplier * RANGE + RANGE + (multiplier === 8 ? 1 : 0);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly title = 'bingo-generator';

  readonly columns: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  readonly rows: number[] = [0, 1, 2];

  bingoData: number[][];

  ngOnInit(): void {
    this.generateBingoTicket();
  }

  generateBingoTicket(): void {
    this.bingoData = Array<number>(this.columns.length)
      .fill(null)
      .map((_, colIndex: number) => this.generateColumnArray(colIndex, this.rows.length));

    // Transpose, Remove extra elements and then transpose back
    this.bingoData = this.sortColumnElements(
      this.transposeArray(
        this.removeExtraElements(
          this.transposeArray(this.bingoData)
        )
      )
    );
  }

  generateColumnArray(colIndex: number, arraySize: number): number[] {
    const returnedArray: number[] = [];
    while (returnedArray.length < arraySize) {
      const randomNumber = generateRandom(getMin(colIndex), getMax(colIndex));
      if (!returnedArray.includes(randomNumber)) {
        returnedArray.push(randomNumber);
      }
    }
    return returnedArray;
  }

  transposeArray<T>(inputArray: T[][]): T[][] {
    const [column] = inputArray;
    return column.map((_: T, colIndex: number) => inputArray.map(row => row[colIndex]));
  }

  removeExtraElements(inputArray: number[][]): number[][] {
    return inputArray
      .map((row: number[], rowIndex: number, inputArrayParam: number[][]) => {
        while (row.filter(item => item).length > 5) {
          const randomColumnIndex: number = generateRandom(0, this.columns.length);
          if (rowIndex < 2) {
            row[randomColumnIndex] = null;
          } else {
            if (inputArrayParam[rowIndex - 2][randomColumnIndex] || inputArrayParam[rowIndex - 1][randomColumnIndex]) {
              row[randomColumnIndex] = null;
            }
          }
        }
        return row;
      });
  }

  sortColumnElements(inputArray: number[][]): number[][] {
    return inputArray
      .map((column: number[]) => {
        const validArrayLength: number = column.filter(item => item).length;
        switch (validArrayLength) {
          case 1:
            return column;
          case 2:
            const indexesToSwap: number[] = column
              .map((item, index) => item ? index : -1)
              .filter(item => item !== -1);
            if (column[indexesToSwap[0]] > column[indexesToSwap[1]]) {
              // Swap the numbers if not in order
              [column[indexesToSwap[0]], column[indexesToSwap[1]]] = [column[indexesToSwap[1]], column[indexesToSwap[0]]];
            }
            return column;
          case 3:
            return column.sort();
        }
      });
  }
}
