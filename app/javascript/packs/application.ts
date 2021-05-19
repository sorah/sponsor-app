import 'bootstrap';
import '@fortawesome/fontawesome-svg-core';

import '../raven'

import Rails from '@rails/ujs';
Rails.start();

import { doUserSponsorshipsForm } from '../user_sponsorships_form';
import { doUserSponsorshipAssetFileForm } from '../user_sponsorship_asset_file_form';

import '../../stylesheets/application.sass';

document.addEventListener("DOMContentLoaded", () => {
  doUserSponsorshipAssetFileForm();
  doUserSponsorshipsForm();
});
