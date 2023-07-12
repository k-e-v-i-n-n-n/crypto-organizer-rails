class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {errors: not_valid}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: {error: "Unauthorized"}, status: :unauthorized
        end
    end

    private

    def not_valid(invalid)
        render json: {error: record.invalid.errors.full_messages}, status: :unprocessable_entity
    end

    def user_params

        params.permit(:user_name, :password, :password_confirmation)
    end
end
