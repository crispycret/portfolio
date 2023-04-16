from flask import Blueprint

projects = Blueprint("projects", __name__, url_prefix="/projects")

from . import routes
from . import models


