import Application from 'ember-style-recalculation-issue/app';
import config from 'ember-style-recalculation-issue/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
