import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'fox',
  template: `
    OK - Fox : {{ name }} <br />
    <br />
    OK - LiveCycle : {{ liveCycle }} // Expected : constructor > ngOnChanges >
    ngOnInit > <br />
    <br />
    KO - Setter : {{ setter }} - {{ setterLiveCycle }} <br />
    -> added twice on change with controls
    <br />
  `,
})
export class FoxComponent implements OnChanges, OnInit {
  @Input() public name: string = '';

  @Input()
  public set setter(v: string) {
    this.setterLiveCycle += `set "${v}" > `;
    console.log('setter', v, this.setterLiveCycle);

    this._setter = v;
  }
  public get setter(): string {
    return this._setter;
  }
  private _setter: string = '';

  public liveCycle = '';
  public setterLiveCycle = '';

  constructor() {
    console.log('constructor');
    this.liveCycle += 'constructor > ';
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.liveCycle += 'ngOnInit > ';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    this.liveCycle += 'ngOnChanges > ';
  }
}
