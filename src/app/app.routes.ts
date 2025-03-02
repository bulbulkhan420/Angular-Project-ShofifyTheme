import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>{
            return import('./pages/homepage/homepage.component').then((m)=>m.HomepageComponent)
        }
    },
    {
        path:'hair',
        loadComponent:()=>{
            return import('./pages/hair/hair.component').then((m)=>m.HairComponent)
        }

    },
    {
        path:'face',
        loadComponent:()=>{
            return import('./pages/face/face.component').then((m)=>m.FaceComponent)
        }
    },
    {
        path:'body',
        loadComponent:()=>{
            return import('./pages/body/body.component').then((m)=>m.BodyComponent)
        }
    },
    {
        path:'blog',
        loadComponent:()=>{
            return import('./pages/blog/blog.component').then((m)=>m.BlogComponent)
        }
    },
    {
        path:'contract',
        loadComponent:()=>{
            return import('./pages/contract/contract.component').then((m)=>m.ContractComponent)
        }
    },
    {
        path:'kits',
        loadComponent:()=>{
            return import('./pages/kits/kits.component').then((m)=>m.KitsComponent)
        }
    },
    {
        path:'ourstory',
        loadComponent:()=>{
            return import('./pages/ourstory/ourstory.component').then((m)=>m.OurstoryComponent)
        }
    }
];
