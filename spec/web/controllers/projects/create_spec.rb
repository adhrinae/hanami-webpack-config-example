require 'spec_helper'
require_relative '../../../../apps/web/controllers/projects/create'

describe Web::Controllers::Projects::Create do
  let(:action) { Web::Controllers::Projects::Create.new }
  let(:params) { Hash[] }

  it 'is successful' do
    response = action.call(params)
    response[0].must_equal 200
  end
end
