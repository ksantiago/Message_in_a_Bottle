class MessagesController < ApplicationController
  respond_to :json

  def index
    @messages = Message.all
    respond_with @messages
  end

  def create
    @message = Message.create(params[:message])
    respond_with @message
  end

  def show
    @message = Message.find(params[:id])
  end

  def update
  end

  def destroy
  end

end
