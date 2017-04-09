require 'spec_helper'
require_relative '../../../../apps/web/controllers/projects/index'

describe Web::Controllers::Projects::Index do
  let(:action) { Web::Controllers::Projects::Index.new }
  let(:params) { Hash[] }

  it 'is successful' do
    response = action.call(params)
    response[0].must_equal 200
  end
end
