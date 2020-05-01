// --- Webpacker Dependancies ---
import "core-js/stable"
import "regenerator-runtime/runtime"

// --- Sage Docs --------------
import "stylesheets/docs/index.scss"
import "javascript/docs/index"

console.warn("WEBPACKER")


// If kajabi has env local sage gem use generated pack tags locally and use local gem else use /dist files that are fingerprinted with gem version

// Serve partial with fingerprinted (with version) to kajabi-products
// If env is development inside partial point to webpacker packs
