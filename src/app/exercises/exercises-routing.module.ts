import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './helpers/overview/overview.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { GameScoreComponent } from './game-score/game-score.component';
import { MulticastComponent } from './multicast/multicast.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { ChatComponent } from './chat/chat.component';
import { HigherorderComponent } from './higherorder/higherorder.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { CreatingComponent } from './creating/creating.component';
import { RatelimitingComponent } from './ratelimiting/ratelimiting.component';
import { AsyncpipeComponent } from './asyncpipe/asyncpipe.component';

const routes: Routes = [
  { path: 'exercises', component: OverviewComponent },
  { path: 'exercises/creating', component: CreatingComponent },
  { path: 'exercises/fromevent', component: FromeventComponent },
  { path: 'exercises/game-score', component: GameScoreComponent },
  { path: 'exercises/multicast', component: MulticastComponent },
  { path: 'exercises/error-handling', component: ErrorHandlingComponent },
  { path: 'exercises/unsubscribe', component: UnsubscribeComponent },
  { path: 'exercises/chat', component: ChatComponent },
  { path: 'exercises/higherorder', component: HigherorderComponent },
  { path: 'exercises/typeahead', component: TypeaheadComponent },
  { path: 'exercises/dragdrop', component: DragdropComponent },
  { path: 'exercises/ratelimiting', component: RatelimitingComponent },
  { path: 'exercises/asyncpipe', component: AsyncpipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
