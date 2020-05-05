namespace :sage do
  namespace :webpacker do
    desc "Install Sage deps with yarn"
    task :yarn_install do
      Dir.chdir(Sage::Engine.root) do
        system "yarn install --no-progress --production"
      end
    end

    desc "Compile Sage frontend packs using webpack for production with digests"
    task compile: [:yarn_install, :environment] do
      Webpacker.with_node_env("production") do
        ensure_log_goes_to_stdout do
          if Sage.webpacker.commands.compile
            # Successful compilation!
          else
            # Failed compilation
            exit!
          end
        end
      end
    end

    desc "Remove Sage compiled frontend pack directory"
    task clobber: [:environment] do
      ensure_log_goes_to_stdout do
        Sage.webpacker.commands.clobber
        $stdout.puts "Removed webpack output path directory #{Sage.webpacker.config.public_output_path}"
      end
    end
  end
end

def ensure_log_goes_to_stdout
  old_logger = Sage.webpacker.logger
  Sage.webpacker.logger = ActiveSupport::Logger.new(STDOUT)
  yield
ensure
  Sage.webpacker.logger = old_logger
end
