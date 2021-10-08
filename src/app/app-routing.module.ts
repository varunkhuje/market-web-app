import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareComponent } from './components/compare/compare.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { NewScenarioComponent } from './components/new-scenario/new-scenario.component';
import { ScenarioComponent } from './components/scenario/scenario.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { 
    path: 'mmm', 
    component: WelcomeComponent 
  },
  { 
    path: 'new_scenario', 
    component: NewScenarioComponent 
  },
  { 
    path: 'scenario', 
    component: ScenarioComponent 
  },
  { 
    path: 'input_constraint', 
    component: MainComponent 
  },
  { 
    path: 'simulator', 
    component: SimulatorComponent 
  },
  {
  path: 'compare', 
  component: CompareComponent 
},
{
  path: 'top_nav', 
  component: TopNavigationComponent 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
