import "./shared"

// --- Sage System --------------
import "stylesheets/system/index.scss"
import "javascript/system/index"

console.warn("WEBPACKER")


// If kajabi has env local sage gem use generated pack tags locally and use local gem else use /dist files that are fingerprinted with gem version

// Serve partial with fingerprinted (with version) to kajabi-products
// If env is development inside partial point to webpacker packs
