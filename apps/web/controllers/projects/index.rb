module Web::Controllers::Projects
  class Index
    include Web::Action

    expose :projects

    def call(params)
      @projects = ProjectRepository.new.all
    end
  end
end
