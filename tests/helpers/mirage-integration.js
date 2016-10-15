//tests/helpers/mirage-integration.js
import mirageInitializer from '../../initializers/ember-cli-mirage';

export default function setupMirage(container) {
  mirageInitializer.initialize(container);
}
