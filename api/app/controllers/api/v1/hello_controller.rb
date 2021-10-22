module Api
  module V1
    class HelloController < ApplicationController
      def index
        render json: 'Hello Rails!!!!!!!!!!!'
      end
    end
  end
end
