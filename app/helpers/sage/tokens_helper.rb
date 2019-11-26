module Sage
  module TokensHelper
    def sage_tokens
      [
        { 
          category: "Border", 
          tokens: [
            { 
              name: "border",
              value: "",
            },
            { 
              name: "border",
              value: "radius",
            },
          ]
        },
        { 
          category: "Breakpoints", 
          tokens: [
            { name: "xs-max" },
            { name: "sm-min" },
            { name: "sm-max" },
            { name: "md-min" },
            { name: "md-max" },
            { name: "lg-min" },
            { name: "lg-max" },
            { name: "xl-min" },
          ]
        },
        { 
          category: "Container", 
          tokens: [
            { name: "container-width" },
            { name: "container-width-sm" },
            { name: "container-width-fluid" },
          ]
        },
        { 
          category: "grid", 
          tokens: [
            { name: "grid-columns" },
            { name: "grid-spacing" },
          ]
        },
        { 
          category: "Shadow", 
          tokens: [
            { name: "shadow" },
            { name: "shadow-md" },
            { name: "shadow-lg" },
            { name: "shadow-xl" },
            { name: "shadow-2xl" },
          ]
        },
        { 
          category: "Sidebar", 
          tokens: [
            { name: "sidebar-width" },
            { name: "sidebar-width-md" },
            { name: "sidebar-width-lg" },
          ]
        },
        { 
          category: "Spacing", 
          tokens: [
            { name: "spacing" },
            { name: "spacing-2xs" },
            { name: "spacing-xs" },
            { name: "spacing-sm" },
            { name: "spacing-lg" },
          ]
        },
        { 
          category: "Font", 
          tokens: [
            { name: "font-family" },
          ]
        },
        { 
          category: "Font Size", 
          tokens: [
            { name: "font-size" },
            { name: "font-size-xs" },
            { name: "font-size-sm" },
            { name: "font-size-md" },
            { name: "font-size-lg" },
            { name: "font-size-xl" },
            { name: "font-size-2xl" },
            { name: "font-size-3xl" },
            { name: "font-size-4xl" },
            { name: "font-size-5xl" },
            { name: "font-size-6xl" },
          ]
        },
        { 
          category: "Font Weight", 
          tokens: [
            { name: "font-weight" },
            { name: "font-weight-semibold" },
            { name: "font-weight-bold" },
          ]
        },
      ]
    end
  end
end
