# if Rake::Task.task_defined?("assets:precompile")
#   Rake::Task["assets:precompile"].enhance(["sage:webpacker:yarn_install"]) do
#     Rake::Task["sage:webpacker:compile"].invoke
#   end
# end

# if Rake::Task.task_defined?("assets:clobber")
#   Rake::Task["assets:clobber"].enhance do
#     Rake::Task["sage:webpacker:clobber"].invoke
#   end
# end

# if Rake::Task.task_defined?("yarn:install")
#   Rake::Task["yarn:install"].enhance do
#     exit(1) unless $?.success?
#   end
# end
