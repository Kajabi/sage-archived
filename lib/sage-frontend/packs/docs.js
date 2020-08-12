// --- Webpacker Dependencies ---
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// --- Sage Docs Assets ----------
require.context('../images/docs', true)
require.context('../images/system', true)
import '../stylesheets/docs/index.scss'
import '../javascript/system/index'
import '../javascript/docs/index'
