import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Module } from './module';
import modulesData from './modules.data';

@Injectable({
  providedIn: 'root',
})
export class InMemoryModuleGateway {
  private readonly _modules$ = new BehaviorSubject<ReadonlyArray<Module>>(
    modulesData
  );

  getAll(): Observable<ReadonlyArray<Module>> {
    return this._modules$.asObservable();
  }
}
