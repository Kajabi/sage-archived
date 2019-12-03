module Sage
  module TokensHelper
    def sage_tokens
      [
        { 
          category: "border", 
          tokens: [
            { name: "default" },
            { name: "radius" },
          ]
        },
        { 
          category: "breakpoint", 
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
          category: "container", 
          tokens: [
            { name: "sm" },
            { name: "md" },
            { name: "fluid" },
          ]
        },
        { 
          category: "shadow", 
          tokens: [
            { name: "sm" },
            { name: "md" },
            { name: "lg" },
            { name: "xl" },
            { name: "2xl" },
          ]
        },
        { 
          category: "sidebar", 
          tokens: [
            { name: "sm" },
            { name: "md" },
            { name: "lg" },
          ]
        },
        { 
          category: "spacing", 
          tokens: [
            { name: "2xs" },
            { name: "xs" },
            { name: "sm" },
            { name: "md" },
            { name: "lg" },
          ]
        },
        { 
          category: "font-height", 
          tokens: [
            { name: "sm" },
            { name: "md" },
          ]
        },
        { 
          category: "font-size", 
          tokens: [
            { name: "xs" },
            { name: "sm" },
            { name: "md" },
            { name: "lg" },
            { name: "xl" },
            { name: "2xl" },
            { name: "3xl" },
            { name: "4xl" },
            { name: "5xl" },
            { name: "6xl" },
          ]
        },
        { 
          category: "font-weight", 
          tokens: [
            { name: "regular" },
            { name: "semibold" },
            { name: "bold" },
          ]
        },
      ]
    end
  end
end
