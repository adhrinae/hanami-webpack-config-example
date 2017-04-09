module Web::Controllers::Projects
  class Index
    include Web::Action

    def call(params)
      if request.xhr?
        begin
          projects = ProjectRepository.new.all.map { |p| p.to_h }
          self.status = 200
          self.body = { projects: projects }.to_json
        rescue Exception => e
          puts e.backtrace
          self.status = 500
          self.body = { error: 'something wrong' }.to_json
        end
      end
    end
  end
end
