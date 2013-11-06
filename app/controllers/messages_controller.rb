class MessagesController < ApplicationController
  respond_to :json

  def index
    @messages = Message.all
    respond_with @messages
  end

  def create
    binding.pry
    @message = Message.new
    @message.title = params["message"]["title"]
    @message.body = params["message"]["body"]
    @message.save
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
