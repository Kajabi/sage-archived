if Rake::Task.task_defined?("assets:precompile")
  enhance_assets_precompile
else
  Rake::Task.define_task("assets:precompile" => "sage:webpacker:compile")
end

def enhance_assets_precompile
  # yarn:install was added in Rails 5.1
  deps = yarn_install_available? ? [] : ["sage:webpacker:yarn_install"]
  Rake::Task["assets:precompile"].enhance(deps) do
    Rake::Task["sage:webpacker:compile"].invoke
  end
end
