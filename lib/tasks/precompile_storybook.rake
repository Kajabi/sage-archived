Rake::Task['assets:precompile'].enhance do
  system('yarn run storybook:precompile')
end
