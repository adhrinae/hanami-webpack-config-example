module Web::Controllers::Projects
  class Create
    include Web::Action

    params do
      required(:name).filled
      required(:description).filled
    end

    def call(params)
      if params.valid?
        project = ProjectRepository.new.create(
          name: params[:name],
          description: params[:description]
        )
        
        self.body = { 
          success: 'Project saved.',
          project: project.to_h
        }.to_json
      else
        self.status = 422
        self.body = params.errors.to_json
      end
    end
  end
end
