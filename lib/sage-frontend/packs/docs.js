// --- Webpacker Dependencies ---
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// --- Sage Docs Assets ----------
require.context('../images/docs', true)
require.context('../../../node_modules/@kajabi/sage/src/images/system', true)
import '../styleheets/docs/index.scss'
import '../../../node_modules/@kajabi/sage/src/javascript/system/index'
import '../javascript/docs/index'
