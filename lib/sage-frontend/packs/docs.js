// --- Webpacker Dependencies ---
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// --- Sage Docs Assets ----------
require.context('../../../node_modules/@kajabi/sage/src/images/docs', true)
require.context('../../../node_modules/@kajabi/sage/src/images/system', true)
import '../../../node_modules/@kajabi/sage/src/stylesheets/docs/index.scss'
import '../../../node_modules/@kajabi/sage/src/javascript/system/index'
import '../../../node_modules/@kajabi/sage/src/javascript/docs/index'
