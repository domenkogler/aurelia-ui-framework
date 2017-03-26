import { Container } from 'aurelia-framework';
import 'lodash';
import 'moment';
import 'numeral';
import './libs/countries';
import './libs/currencies';
import './libs/filetypes';
import './libs/phonelib';
import './libs/window';
import * as ld from "lodash";
export declare var _: ld.LoDashStatic;
export declare var kramed: KramedStatic;
export declare var moment: moment.MomentStatic;
export declare var numeral: Numeral;
export * from './utils/ui-application';
export * from './utils/ui-constants';
export * from './utils/ui-dialog';
export * from './utils/ui-event';
export * from './utils/ui-format';
export * from './utils/ui-http';
export * from './utils/ui-model';
export * from './utils/ui-tree-model';
export * from './utils/ui-utils';
import './elements/core/ui-grid';
import './elements/core/ui-page';
import './elements/core/ui-viewport';
import './elements/inputs/ui-button';
import './elements/inputs/ui-date';
import './elements/inputs/ui-form';
import './elements/inputs/ui-input';
import './elements/inputs/ui-lists';
import './elements/inputs/ui-markdown';
import './elements/inputs/ui-options';
import './elements/inputs/ui-phone';
import './elements/inputs/ui-textarea';
import './elements/components/ui-alerts';
import './elements/components/ui-bars';
import './elements/components/ui-breadcrumb';
import './elements/components/ui-datagrid';
import './elements/components/ui-dg-columns';
import './elements/components/ui-drawer';
import './elements/components/ui-dropdown';
import './elements/components/ui-menu';
import './elements/components/ui-panel';
import './elements/components/ui-sidebar';
import './elements/components/ui-tab';
import './elements/components/ui-tree';
import './attributes/ui-badge';
import './attributes/md-view';
import './value-converters/ui-lodash';
import './value-converters/ui-text';
import 'text!./ui-glyphs.html';
export interface UIConfig {
    title(t: string): UIConfig;
    version(t: string): UIConfig;
    appKey(t: string): UIConfig;
    apiUrl(t: string): UIConfig;
    apiHeaders(t: any): UIConfig;
    sendAuthHeader(t: boolean): UIConfig;
    languages(l: Array<any>): UIConfig;
}
export declare function configure(config: {
    container: Container;
    globalResources?: (...resources: string[]) => any;
}, configCallback: any): void;
