import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OrderListComponent } from '../orders/order-list/order-list.component';
import { NbSpinnerModule, NbTreeGridComponent, NbTreeGridModule } from '@nebular/theme';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { RightSidemenuComponent } from './components/right-sidemenu/right-sidemenu.component';
import { ImageUploadingComponent } from './components/image-uploading/image-uploading.component';
import { ShowcaseDialogComponent } from './components/showcase-dialog/showcase-dialog.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PickListModule } from 'primeng/picklist';
import { DropdownModule } from 'primeng/dropdown';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { TreeModule, TreeTableModule } from 'primeng/primeng';
import { ValidateNumberDirective } from './validation/validate-number.directive';
import { PasswordPromptComponent } from './components/password-prompt/password-prompt';


@NgModule({
  declarations: [
    OrderListComponent,
    RightSidemenuComponent,
    NotFoundComponent,
    ImageUploadingComponent,
    ShowcaseDialogComponent,
    PasswordPromptComponent,
    PaginatorComponent,
    BackButtonComponent,
    ValidateNumberDirective
  ],
  imports: [
    CommonModule,
    RouterModule,

    NbTreeGridModule,
    Ng2SmartTableModule,
    ThemeModule,
    NbSpinnerModule,
    TranslateModule,
    TreeModule,
    TreeTableModule
  ],
  exports: [
    Ng2SmartTableModule,
    ThemeModule,
    NbSpinnerModule,
    TranslateModule,
    TreeModule,
    TreeTableModule,

    OrderListComponent,
    RightSidemenuComponent,
    NotFoundComponent,
    ImageUploadingComponent,
    ShowcaseDialogComponent,
    PaginatorComponent,
    BackButtonComponent,

    NbTreeGridModule,
    NbTreeGridComponent,
    PickListModule,
    DropdownModule,
    ValidateNumberDirective
  ],
  providers: [CurrencyPipe],
  entryComponents: [ShowcaseDialogComponent],
})
export class SharedModule {
}
